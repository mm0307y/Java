class image_upload1212 {
  // 여기에는 상태는 없어요
  async upload(file) {
    //upload했다면 그 URL전달
    //아래 수동으로 했던 거 지우고
    //return 'file';
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "xxxxxx");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dabcqtmbm/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default image_upload1212;
