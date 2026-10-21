import { postMetadata } from "../postMetadata";
import PostSchema from "../PostSchema";

const baseMetadata = {
  title: "Aligning Free Trial Strategies with Usage Patterns | ASOWin Blog",
  description: "How long should a free trial last? Learn how trial duration affects whether users experience value, form habits, and decide to pay, and how to align it with real usage patterns.",
};

export const metadata = postMetadata("free-trial-strategies", baseMetadata);

export default function FreeTrialStrategiesLayout({ children }) {
  return (
    <>
      <PostSchema slug="free-trial-strategies" />
      {children}
    </>
  );
}
