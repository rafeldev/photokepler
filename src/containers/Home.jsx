import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hero } from "../components/Hero/Hero";
import { PhotoDaySection } from "../components/PhotoDaySection/PhotoDaySection";
import { InfoNasaSection } from "../components/InfoNasaSection/InfoNasaSection";
import { Formulario } from "../components/Formulario/Formulario";
import { Downloadpage } from "./Downloadpage/Downloadpage";

//Services
import { getPhotoOfDay, getPhotoByDate } from "../services";

export function Home() {
  const dispatch = useDispatch();
  const photoOfDay = useSelector((state) => state.photoOfDay);
  const photoByDate = useSelector((state) => state.photoByDate);

  // console.log(photoOfDay,'AQUIIIIIII')
  const date = '2021-01-06'
  
  useEffect(() => {
    dispatch(getPhotoOfDay());
    dispatch(getPhotoByDate(date));
  }, [dispatch]);

  return (
    <>
      <Hero />
      <PhotoDaySection photoOfDay={photoOfDay} />
      <InfoNasaSection />
      {/* <Formulario /> */}
<<<<<<< HEAD
      {/* <Downloadpage photoOfDay={photoOfDay} /> */}
=======
>>>>>>> 5b6bc702e57c5b85462c15f15fc607022a05b44b
    </>
  );
}
