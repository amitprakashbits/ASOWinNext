import { postMetadata } from "../postMetadata";
import PostSchema from "../PostSchema";

const baseMetadata = {
  title: "15 Common ASO Mistakes That Are Killing Your App Downloads | ASOWin",
  description: "Discover 15 common App Store Optimization mistakes that quietly hurt visibility and conversion, and learn practical fixes ASOWin uses to correct them.",
  keywords: "ASO Mistakes, App Store Optimization Mistakes, App Downloads, ASO Strategy, Keyword Stuffing, App Store Screenshots, App Reviews"
};

export const metadata = postMetadata("common-aso-mistakes-to-avoid", baseMetadata);

export default function CommonAsoMistakesToAvoidLayout({ children }) {
  return (
    <>
      <PostSchema slug="common-aso-mistakes-to-avoid" />
      {children}
    </>
  );
}
