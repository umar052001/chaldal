import React from "react";
import { Modal, Input, Button,Tooltip ,Text, Spacer } from "@nextui-org/react";
import { EditIcon } from "../table/EditIcon";

interface Props {
  handleCat:()=>void,
  titleText:string
}

const AddCatModal:React.FC<Props>=({handleCat,titleText})=> {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <span>
      {
        titleText=="Edit"?
        <Tooltip content="Edit">
            <Button auto  style={{backgroundColor:"transparent"}} onPress={handler}>
              <EditIcon size={20} fill="#979797" />
            </Button>
        </Tooltip>
        :
        <Button auto  style={{backgroundColor:"red",borderRadius:"5px"}} onPress={handler}>
        {titleText} Category
      </Button>
      }
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {titleText}
            <Text b  size={18}>
            &nbsp;Category
            </Text>
          </Text>
        </Modal.Header>
        <form >
        <Modal.Body>
          <Spacer y={0.5}/>
            <Input
              underlined
              name="catName"
              labelPlaceholder="Category Name" 
              color="default"
              />
              <Spacer y={0.5}/>
              <Input
                underlined
                name="catSubTitle"
                labelPlaceholder="Category Subtitle" 
                color="default"
                />
                <input type="file" name="catImg"/>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={handleCat}>
            {titleText}
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </span>
  );
}

export default  AddCatModal;