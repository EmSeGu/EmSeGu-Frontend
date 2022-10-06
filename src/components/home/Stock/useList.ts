import { useEffect, useState, useRef } from "react";
import StockApi from "../../../api/stock/Stock.api";

const useList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const [itemLists, setItemLists] = useState<any[]>([]);

  let count = 0;

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    const Items: any[] = await StockApi.getStockList(count++);

    setItemLists((itemLists: any[]) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return { itemLists, isLoaded, setTarget };
};

export default useList;
