import { Carousel } from "../../components/Carousel";
import { gallery } from "../../images/gallery";

export function Page() {
  return (
    <div className="flex semidark">
      <Carousel
        {...{
          imgs: gallery.map((file) => ({
            src: file,
            alt: file,
          })),
        }}
      />
    </div>
  );
}
