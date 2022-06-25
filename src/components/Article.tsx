/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import AutoCompleteDescription from "../features/AutoComplete/AutoCompleteDescription";
import DrawerDescription from "../features/Drawer/DrawerDescription";
import DropDownDescription from "../features/DropDown/DropDownDescription";
import ModalDescription from "../features/Modal/ModalDescription";
import TabsDescription from "../features/Tabs/TabsDescription";
import TagDescription from "../features/Tag/TagDescription";
import ToggleDescription from "../features/Toggle/ToggleDescription";
import ToastDescription from "../features/Toast/ToastDescription";
import SkeletonUIDescription from "../features/SkeletonUI/SkeletonUIDescription";
import FeatureIntro from "../features/FeatureIntro";
import TransferListDescription from "../features/TransferList/TransferListDescription";

const container = css`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Article = () => {
  return (
    <div css={container}>
      <Routes>
        <Route path="/intro" element={<FeatureIntro />} />
        <Route path="/modal" element={<ModalDescription />} />
        <Route path="/tabs" element={<TabsDescription />} />
        <Route path="/tag" element={<TagDescription />} />
        <Route path="/toggle" element={<ToggleDescription />} />
        <Route path="/autoComplete" element={<AutoCompleteDescription />} />
        <Route path="/dropDown" element={<DropDownDescription />} />
        <Route path="/drawer" element={<DrawerDescription />} />
        <Route path="/toast" element={<ToastDescription />} />
        <Route path="/skeletonui" element={<SkeletonUIDescription />} />
        <Route path="/transferlist" element={<TransferListDescription />} />
      </Routes>
    </div>
  );
};

export default Article;
