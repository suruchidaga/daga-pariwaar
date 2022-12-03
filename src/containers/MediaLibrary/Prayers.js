import ContentHeader from "../ContentHeader";
import { loadState } from "@lib/helpers/localStorage";
import FamilyDetailsWrapper from "../FamilyDetails/styles";
import { useState } from 'react'
//import { createClient } from '@supabase/supabase-js'
import supabase from "../../components/utility/supabase";
import { OnlyPlayPauseButton } from '../../components/players'
import { Typography , Card, Avatar, List, Divider, Modal, Form, Row, Col } from "antd";

export default function Prayers() {
    const [fileNames, setFileNames] = useState([
        'ganesh-vandana.ogg|Din Ki Shuruwat Ganesh Vandana Ke Saath',
        /*'gayatri-mantra.ogg|Calms the mind by reducing stress and anxiety.',
        'maa-durga-jayanti-mahakali.ogg|May the 9 avatars of Maa Durga bless you with 9 qualities – power, happiness, humanity, peace, knowledge, devotion, name, fame, and health.',
        'sri-hari-vishnu.ogg|All auspiciousness to Lord Vishnu, all auspiciousness to one who has Garuda as His flag. All auspiciousness to one who has eyes like the lotus flowers, and auspiciousness to Hari.',*/
        'triambakam-yaja-mahey.ogg|Beneficial for mental, emotional, and physical health and consider it a moksha mantra which bestows longevity and immortality.'])

  return (
      <FamilyDetailsWrapper>
          <ContentHeader headerTitle="Prayers Anju Bhuaji Ki Awaaz Mein" />

          {fileNames.map((fileName) =>
              <Card>
                <p className='subheading'>{fileName.split('|')[1]}</p><br/>
                <OnlyPlayPauseButton fileName={fileName.split("|")[0]}/>
              </Card>
          )}

      </FamilyDetailsWrapper>
    );
}
