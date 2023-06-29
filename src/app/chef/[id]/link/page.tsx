import Link from "next/link";

import { RecipeAppT10Chefs } from "@/mock";

import { Button } from "@/components/button";
import { ArrowIcon } from "@/components/icons";
import { ImageComponent } from "@/components/image";

/* eslint-disable import/first */
const followerNumber = 5678;

export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};
// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// 上記参考に動的ルーティングに対応しておりますが、DBと合わせた際の挙動まで考えて実装していません。

const ChefPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="relative mx-auto">
      <ImageComponent alt={""} ratio={"1/1"} width={"full"} />
      <button type="button" className="absolute left-3 top-3 cursor-pointer rounded-full p-1.5">
        <Link href={{ pathname: `/` }}>
          <ArrowIcon />
        </Link>
      </button>
      <div className="pt-4">
        <div className="px-4 pb-3 text-large">
          {RecipeAppT10Chefs[0].name} <span className="text-medium">シェフ</span>
        </div>
        <div className="px-4">
          <div>{RecipeAppT10Chefs[0].description}</div>
          <div className="my-3">{followerNumber}フォロアー</div>
          <div>
            <Button color="tomato">フォローする</Button>
          </div>
        </div>
        <div>
          <div className="mt-3 flex justify-center text-center">
            <div className="w-1/2 border-b-2 border-lightGray">
              <Link href={{ pathname: `/chef/${id}` }}>レシピ</Link>
            </div>
            <div className="w-1/2 border-b border-gray/20 hover:border-b-2  hover:border-gray">
              <Link href={{ pathname: `/chef/${id}` }}>リンク</Link>
            </div>
          </div>
        </div>
        <div className="mb-8 mt-2">
          <ul className="pl-3">
            <li className="flex border-b border-lightGray pb-3">
              <div className="mr-2 h-10 w-10 bg-tomato" />
              <div className="flex flex-col">
                Instagram<div></div>
                <div className="text-small">{} フォロワー ・</div>
                {}
              </div>
            </li>
            <li className="flex border-b border-lightGray py-3">
              <div className="mr-2 h-10 w-10 bg-tomato" />
              <div className="flex flex-col">
                Twitter<div></div>
                <div className="text-small">{} フォロワー ・</div>
                {}
              </div>
            </li>
            <li className="flex border-b border-lightGray py-3">
              <div className="mr-2 h-10 w-10 bg-tomato" />
              <div className="flex flex-col">
                YouTube<div></div>
                <div className="text-small">{} フォロワー ・</div>
                {}
              </div>
            </li>
            <li className="flex border-b border-lightGray py-3">
              <div className="mr-2 h-10 w-10 bg-tomato" />
              <div className="flex flex-col">
                Hoge Hoge<div></div>
                <div className="text-small">
                  <Link target="_blank" href={{ pathname: `https://example.com/` }}>
                    https://example.com/
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChefPage;