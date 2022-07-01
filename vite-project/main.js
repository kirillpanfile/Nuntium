async function upload() {
  const file = document.getElementById("file").files[0];
  const filename = Date.now() + file.name;
  const data = new FormData();
  data.append("name", filename);
  data.append("file", file);
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const description = document.getElementById("description");
  const post = {
    title: title.value,
    username: author.value,
    desc: description.value,
    photo: filename,
  };
  console.log(post);

  await fetch("http://localhost:5000/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const res = await fetch("http://localhost:5000/api/upload", {
    method: "POST",
    body: data,
  });
  console.log(res);
}
