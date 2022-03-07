import React from "react";

import NavigationSidebar from "../NavigationSidebar";
import HomeComponent from "./HomeComponent";
import PostSummaryList from "../PostSummaryList";
import ExploreComponent from "../ExploreScreen/ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

const HomeScreen = () => {
    return (
        <div className={`row mt-2`}>
            <div className={`col-2 col-md-2 col-lg-1 col-xl-2`}>
                <NavigationSidebar active="explore"/>
            </div>
            <div className={`col-10 col-md-10 col-lg-7 col-xl-6`}>
                <HomeComponent/>
            </div>
            <div className={`d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4`}>
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default HomeScreen;