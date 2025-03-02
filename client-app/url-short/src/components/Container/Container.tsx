// import * as React from "react";
// import FormContainer from "../FormContainer/FormContainer";
// import { UrlData } from "../../interface/UrlData";
// import axios from "axios";
// import { serverUrl } from "../../helpers/Constants";
// import DataTable from "../DataTable/DataTable";

// interface IContainerProps {}

// const Container: React.FunctionComponent<IContainerProps> = () => {
//   const [data, setData] = React.useState<UrlData[]>([]);
//   const [reload, setReload] = React.useState<boolean>(false);

//   const updateReloadState = (): void => {
//     setReload(true);
//   };

//   const fetchTableData = async () => {
//     const response = await axios.get(`${serverUrl}/shortUrl`);
//     console.log("The response from server is : ", response);
//     setData(response.data);
//     setReload(false);
//   };

//   React.useEffect(() => {
//     fetchTableData();
//   }, [reload]);

//   return (
//     <>
//       <FormContainer updateReloadState={updateReloadState} />
//       <DataTable updateReloadState={updateReloadState} data={data} />
//     </>
//   );
// };

// export default Container;
import * as React from "react";
import FormContainer from "../FormContainer/FormContainer";
import { UrlData } from "../../interface/UrlData";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";
import DataTable from "../DataTable/DataTable";

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  // This function triggers a reload.
  const updateReloadState = (): void => {
    setReload(true);
  };

  // Fetch table data from your API endpoint.
  const fetchTableData = async () => {
    try {
      const response = await axios.get(`${serverUrl}/shortUrl`);
      console.log("The response from server is:", response);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching table data:", error);
    } finally {
      setReload(false);
    }
  };

  // Whenever reload changes, fetch new data.
  React.useEffect(() => {
    fetchTableData();
  }, [reload]);

  return (
    <>
      <FormContainer updateReloadState={updateReloadState} />
      <DataTable updateReloadState={updateReloadState} data={data} />
    </>
  );
};

export default Container;
