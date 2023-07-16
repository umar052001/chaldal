import { Table, Row, Col, Tooltip, Text, Avatar } from "@nextui-org/react";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";

type ItemType = {
  id: string | number,
  name?: string,
  sub?: string,
  avatar?: string,
  [key:string]:any
};
interface ModalProps {
  handleCat:()=>void,
  titleText:string,
}
interface Props{
  EditComponent:React.FC<ModalProps>
}


const CatTable:React.FC<Props>=({EditComponent})=> {
  const columns = [
    { name: "ID", uid: "id" },
    { name: "NAME", uid: "name" },
    { name: "SUBTITLE", uid: "sub" },
    { name: "Image", uid: "img" },
    { name: "ACTIONS", uid: "actions" },
  ];
  // TODO: Fetch data from firebace and replace item with it
  const items: ItemType[] = [
    {
      id: 1,
      name: "Tony Reichert",
      sub: "Tony Reichert",
      img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    }
  ];
  const handleEditCat=()=>{
    // TODO Edit Category into the firebase
    console.log("edited")
  }
  const handleDeleteCat=()=>{
    // TODO Delete Category into the firebase
    console.log("deleted")
  }
  const renderCell = (item: ItemType, columnKey: React.Key) => {
    const cellValue = item[columnKey];
    switch (columnKey) {
      case "id":
        return (
          <Row>
            <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
            </Text>
          </Row>
        );
      case "name":
        return (
          <Row>
            <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
            </Text>
          </Row>
        );
      case "img":
        return (
          <Row>
            <Avatar src={cellValue} squared/>
          </Row>
        );
      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="View SubCategories">
                <IconButton onClick={() => console.log("View")}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
            <EditComponent handleCat={handleEditCat} titleText={"Edit"} />
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Delete"
                color="error"
                onClick={handleDeleteCat}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={items}>
        {(item: ItemType) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}

export default CatTable;