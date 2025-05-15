import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import "./styles.css";

const rows = [
  {
    name: "Test organization",
    link: "/organization",
    domain: "Addington Highlands",
    usedBy: "",
  },
  {
    name: "Police Department_Testing",
    link: "/police",
    domain: "Windsor",
    usedBy: "Windsor - Public Works, Windsor - Building Control",
  },
  {
    name: "Gas Utility",
    link: "/gas",
    domain: "Windsor",
    usedBy:
      "Windsor - Public Works, Windsor Building Control (Proto), Windsor - Planning approval, Windsor - Building Control",
  },
  {
    name: "Dominion Maryland",
    link: "/dominion",
    domain: "Dominion Energy",
    usedBy: "",
  },
  {
    name: "Test Approver Group",
    link: "/approver",
    domain: "SDG County",
    usedBy: "SDG County, Planning Department",
  },
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Approver group name</th>
            <th>Domain name</th>
            <th>Used by</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <>
              <tr
                key={`main-${index}`}
                onClick={() => toggleAccordion(index)}
                className="main-row"
              >
                <td>
                  <span className="arrow">
                    {openIndex === index ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </span>
                  <a
                    href={item.link}
                    onClick={(e) => e.stopPropagation()}
                    className="link"
                  >
                    {item.name}
                  </a>
                </td>
                <td>{item.domain}</td>
                <td>{item.usedBy}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAccordion(index);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
              {openIndex === index && (
                <tr key={`expand-${index}`} className="expand-row">
                  <td colSpan="4">
                    <div className="expand-content">
                      <input type="text" placeholder="Enter value" />
                      <select>
                        <option>Select</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                      </select>
                      <button>Save</button>
                    </div>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}
