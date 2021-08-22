import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHanlder(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>New meetups</title>
        <meta name="description" content="Add your meetups and create amazing networking opportunities"></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHanlder} />
    </Fragment>
  );
}

export default NewMeetupPage;
