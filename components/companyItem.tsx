import styles from "../styles/CompanyItem.module.css";
import { Company } from "../interfaces";

type CompanyItemProps = {
  company: Company;
};

export default function CompanyItem(props: CompanyItemProps) {
  const { company } = props;
  const { name, imageUrl, date, description, sourceUrl } = company;
  return (
    <li>
      <a
        href={sourceUrl}
        target="_blank"
        className="block bg-white shadow rounded px-4 py-4 mb-2"
      >
        <div className="flex items-center mb-1">
          <div className="bg-gray-500 rounded h-8 w-8">
            <img className="absolute rounded w-8 h-8" src={imageUrl} />
          </div>
          <div className="flex-1 ml-4">
            <span className="text-xl font-medium mr-2">{name}</span>
            <span className="font-medium text-gray-600">
              {date.toDateString()}
            </span>
          </div>
        </div>
        <div className="ml-12">{description}</div>
      </a>
    </li>
  );
}
