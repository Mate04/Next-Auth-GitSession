import { getSession, signOut } from "next-auth/react";

function HomePage({ session }) {
  if (session) {
    return (
      <div>
        <div>
          <p>{session.user.email}</p>
          <p>{session.user.name}</p>
          <img src={session.user.image} alt="" />
        </div>
        <div>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    );
  } else {
    return <div>agregar Skeleton</div>;
  }
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };

  return {
    props: {
      session,
    },
  };
};

export default HomePage;
