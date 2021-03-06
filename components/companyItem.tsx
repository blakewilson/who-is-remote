import { Company } from "../interfaces";
import styles from "../styles/CompanyItem.module.css";

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
          <div className="rounded h-12 w-12 flex items-center justify-center">
            <img className="w-full h-auto" src={imageUrl} />
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
