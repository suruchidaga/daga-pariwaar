import supabase from "./supabase";

export default function UploadImg({ onSuccess, onError }) {
  const fileUpload = async (e) => {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
      const fileName = file?.name;

      const { data, error } = await supabase.storage
        .from("family")
        .upload("avatar/" + fileName, file);

      if (data) {
        onSuccess(data.path);
      }
      if (error) {
        onError(error);
      }
    }
  };

  return <input type="file" name="file" id="file" onChange={fileUpload} />;
}
