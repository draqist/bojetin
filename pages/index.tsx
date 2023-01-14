import { Button, Center } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import { logInUser, registerUser } from "../utils/UI-LOGIC/auth";
import {
  testdummy
} from "../utils/UI-LOGIC/helpers.mini";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // @ts-ignore
  return (
    <Center h="100vh">
      <Button onClick={() => registerUser(testdummy, width)}>
        CLICK ME TO TEST DUMMY{" "}
      </Button>
      <Button onClick={() => logInUser(testdummy)}>
        CLICK ME TO LOG DUMMY{" "}
      </Button>
    </Center>
  );
}
