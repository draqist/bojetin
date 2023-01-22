import { useEffect, useState } from "react";

const useTime = () => {
  const [currentTimeofDay, setCurrentTimeofDay] = useState<String>("");
  var now = new Date();
  var hrs = now.getHours();

  useEffect(() => {
    if (hrs < 12) {
      setCurrentTimeofDay("morning 🌅");
    } else if (hrs >= 12 && hrs <= 17) {
      setCurrentTimeofDay("afternoon 🌞");
    } else if (hrs >= 17 && hrs <= 24) {
      setCurrentTimeofDay("evening 🌙");
    }
  }, []);

  return currentTimeofDay;
};

export { useTime };
