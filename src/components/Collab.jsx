import React from "react";
import { Tldraw, getSnapshot, loadSnapshot, useEditor } from "tldraw";
import "tldraw/tldraw.css";
import supabase from "../utils/supabase";
import { useParams } from "react-router";

const Collab = () => {
  const { roomId } = useParams();

  // Load saved data from Supabase
  async function loadData(editor) {
    try {
      const { data, error } = await supabase
        .from("whiteboard")
        .select("json")
        .eq("key", roomId);

    

      if (error) {
        console.error("Error fetching drawing:", error);
        return;
      }

      if (data && data.length > 0) {
      
        loadSnapshot(editor.store, JSON.parse(data[0].json));
      } else {
        console.log("No data found for this room.");
      }
    } catch (err) {
      console.error("Unexpected error loading data:", err);
    }
  }

  // Toolbar with Save Button
  function Toolbar() {
    const editor = useEditor();

    async function save() {
      const snapshot = getSnapshot(editor.store);
      const { data, error } = await supabase
        .from("whiteboard")
        .upsert([{ "key": roomId, json: JSON.stringify(snapshot) }],{ onConflict: 'key' });

      

      if (error) {
        console.error("Error saving drawing:", error);
      } else {
        console.log("Drawing saved successfully:", data);
      }
    }

    return <button style={{pointerEvents: "all"}} onClick={save}>Save</button>;
  }

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw
        components={{ SharePanel: () => <Toolbar /> }}
        onMount={(editor) => {
          loadData(editor);
        }}
      />
    </div>
  );
};

export default Collab;
