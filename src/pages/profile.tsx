import { NextPage } from "next";

import { withSessionSsr } from "@/utils/auth";

import { Profile } from "../components/profile";
import StandardLayout from "../components/standard-layout";
import { withSession } from "../components/user-provider";
import { withPageTranslations } from "../utils/with-page-translations";

const Page: NextPage = () => {
  return (
    <StandardLayout>
      <Profile />
    </StandardLayout>
  );
};

export const getServerSideProps = withSessionSsr(
  withPageTranslations(["common", "app"]),
);

export default withSession(Page);
