import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hero } from "../components/Hero/Hero";
import { PhotoDaySection } from "../components/PhotoDaySection/PhotoDaySection";
import { InfoNasaSection } from "../components/InfoNasaSection/InfoNasaSection";

//Services
import { getPhotoOfDay, getPhotoByDate } from "../services";

export function Home() {
  const dispatch = useDispatch();
  const photoOfDay = useSelector((state) => state.photoOfDay);


  useEffect(() => {
    dispatch(getPhotoOfDay());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <PhotoDaySection photoOfDay={photoOfDay} />
      <InfoNasaSection />
    </>
  );
}
