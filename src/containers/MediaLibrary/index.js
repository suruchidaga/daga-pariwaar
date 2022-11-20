import ContentHeader from "../ContentHeader";
import { loadState } from "@lib/helpers/localStorage";
import FamilyDetailsWrapper from "../FamilyDetails/styles";
import Gallery from "./Gallery";
//import Image from 'next/image'
import { useState } from 'react'
//import { createClient } from '@supabase/supabase-js'
import supabase from "../../components/utility/supabase";



export default function FamilyDetails() {
  const selectedMember = loadState("selectedMember");
  const selectedMemberName = `${selectedMember?.name?.first} ${selectedMember?.name?.last}`;
    console.log(supabase);
const { data } = supabase.from('').select('*').order('id');
  console.log("gallery");
  console.log(data);
  const [images, setImages] = useState(() => data);


  const onError = (error) => {
    console.log(error);
  };




  //setTreeData(unflatten(familyDetails));
  //setTreeData(unflatten(familyDetails));
 /*const [rawFamilyData, setRawFamilyData] = useState({});
  setRawFamilyData(familyDetails);
  console.log(treeData);*/
  console.log(images);
  //<UpcomingEvents familyData = {rawFamilyData}/>

  return (
    <FamilyDetailsWrapper>
      <ContentHeader headerTitle="Family Details" />

      {images && (
        <>
          <Gallery images = {images}/>
        </>
      )}

    </FamilyDetailsWrapper>
  );
}
