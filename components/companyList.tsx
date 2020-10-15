import CompanyItem from "./companyItem";
import data from "../data";

export default function CompanyList() {
  if (!data) {
    return null;
  }

  return (
    <div className="relative">
      <ul>
        {data.map((company, index) => (
          <CompanyItem key={index} company={company} />
        ))}
      </ul>
    </div>
  );
}
