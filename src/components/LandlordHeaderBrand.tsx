
import React from "react";
import BrandLogo from "@/components/shared/BrandLogo";

type Props = {
  onClick: () => void;
};

const LandlordHeaderBrand: React.FC<Props> = ({ onClick }) => (
  <BrandLogo
    showText={true}
    showRoleTag={true}
    roleTag="Landlord"
    onClick={onClick}
  />
);

export default LandlordHeaderBrand;
