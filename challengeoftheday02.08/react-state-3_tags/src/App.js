import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
//yes s
export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function DeleteTag(tagToRemove){
    setTags(tags.filter((tag) => tag !== tagToRemove));
  }

  function addTag(tag){
    setTags([...tags, tag]);
  }

  return (
    <main className="app">
      <Form onAddTag={addTag}/>
      <List tags={tags} onDeleteTag={DeleteTag} />
    </main>
  );
}
