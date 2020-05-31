import React from "react";
import { shallow } from "enzyme";
import AdsGrid from "./AdsGrid";

describe("AdsGrid", () => {
  const props = {
    ads: [
      {
        tags: ["lifestyle"],
        _id: "5e43096e99660405061db854",
        name: "incredibly awesome",
        price: 15,
        description: "test description",
        type: "sell",
        photo: "https://pbs.twimg.com/media/Dpu128FWwAI_Bru?format=jpg",
        createdAt: "2020-02-11T20:07:10.232Z",
        updatedAt: "2020-05-31T09:38:39.133Z",
      },
    ],
    addToFavs: jest.fn(),
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AdsGrid {...props} />);
  });
  wrapper = shallow(<AdsGrid {...props} />);
  console.log(wrapper);

  test("should render ", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("snapshot testing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render a List of ads", () => {
    expect(wrapper.find("AdsList").props().items).toEqual(props.ads);
  });

  test("should add a advertisement to favorites", () => {
    const ad = {
      tags: ["lifestyle"],
      _id: "5e43096e99660405061db854",
      name: "incredibly awesome",
      price: 15,
      description: "test description",
      type: "sell",
      photo: "https://pbs.twimg.com/media/Dpu128FWwAI_Bru?format=jpg",
      createdAt: "2020-02-11T20:07:10.232Z",
      updatedAt: "2020-05-31T09:38:39.133Z",
    };

    const adItem = wrapper.find("AdsList").props().renderItem(ad);
    adItem.props.onAddToFavsClick();
    expect(props.addToFavs).toHaveBeenCalledWith(ad._id);
  });
});
