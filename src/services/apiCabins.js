import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabin").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
   
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  ); // replace because if file name is like manish1/2 than supabase will create manish1 folder and 2 file in it

  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //create edit cabin
  let query = supabase.from("cabin");
  //A) create
  if (!id)query = query.insert([{ ...newCabin, image: imagePath }]);

  //b) Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  if(hasImagePath) return data
  //upload image

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  if (storageError) {
    await supabase.from("cabin").delete().eq("is", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabin").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
