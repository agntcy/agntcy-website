import RenderLogos from "../reusables/render-logo";
import { logos } from "~/data/members";

const Members = async () => {
  return (
    <div className="mx-auto 2xl:mx-0 container w-full py-2 md:py-2 lg:py-6">
      <div className="pb-16">
        <div className="text-white text-[16px] pb-6 pt-4 md:px-0 xl:px-0 font-bold uppercase">
          Members and Contributors
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:grid-cols-3 gap-3 pb-8 md:pb-3 px-4 md:px-4">
          {RenderLogos(
            logos.sort((a, b) => a.name.localeCompare(b.name)),
            "lg:self-center lg:flex lg:justify-center pb-2"
          )}
        </div>
      </div>
    </div>
  );
};
export default Members;
