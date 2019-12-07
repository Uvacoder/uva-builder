import React from "react";
import ReactDOM from "react-dom";
import Editor from "../../Components/editor";
import ControlBar from "../../Components/controlBar";
import Modal from "../../Components/modal";
import Element from "../../Components/controlBar/";
import { EditorWrapper } from "../../Components/editor/styles";
import {
  BuilderWrapper,
  ModalRow,
  CodeModalRow,
  CodeEditor,
  SettingType,
  SettingVal
} from "./styles";
import { FlexLeft, FlexRight } from "../../Components/FlexSplit/FlexSplit";
import { Button, Paragraph } from "../../Styling";

export default class Builder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: {
        projectName: ""
      },
      code: {
        html: ""
      }
    };
    this.settingsModal = React.createRef();
    this.codeModal = React.createRef();
  }

  // setting modal handler
  openModal = () => {
    this.settingsModal.current.toggleModal(true);
  };

  handleSettingsChange = event => {
    const { settings } = { ...this.state };
    const currentState = settings;

    const { name, value } = event.target;
    currentState[name] = value;

    this.setState({ settings: currentState });
  };

  // code modal handler
  openCodeModal = () => {
    this.codeModal.current.toggleModal(true);
  };

  handleCodeChange = event => {
    const { code } = { ...this.state };
    const currentState = code;

    // const { name, value } = event.target;
    // currentState[name] = value;

    this.setState({ settings: currentState });
  };

  render() {
    const { settings } = this.state;
    return (
      <BuilderWrapper>
        <Modal ref={this.settingsModal} title="Preferences">
          <ModalRow>
            <FlexLeft>
              <SettingType>Project Title</SettingType>
              <SettingVal>Hello World</SettingVal>
            </FlexLeft>
            <FlexRight>
              <Button>Edit</Button>
            </FlexRight>
            {/* <label htmlFor="projectName">
                            Project Title
                            <input
                                type="text"
                                name="projectName"
                                id="projectName"
                                value={settings.projectName}
                                onChange={this.handleSettingsChange}
                            />
                        </label> */}
          </ModalRow>
          <ModalRow>
            <FlexLeft>
              <SettingType>Project Description</SettingType>
              <SettingVal>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque,
                etiam non purus euismod.
              </SettingVal>
            </FlexLeft>
            <FlexRight>
              <Button>Edit</Button>
            </FlexRight>
          </ModalRow>
          <ModalRow>
            <FlexLeft>
              <SettingType>Meta Tags</SettingType>
              <SettingVal>
                Include tags with your title and description to help with search
                engine optimization
              </SettingVal>
            </FlexLeft>
            <FlexRight>
              <label className="switch">
                <input type="checkbox" defaultChecked />
                <span className="slider round" />
              </label>
            </FlexRight>
          </ModalRow>
        </Modal>
        <Modal modalType="codeModal" ref={this.codeModal} title="Code Export">
          <CodeModalRow>
            <FlexLeft>
              <Paragraph>HTML</Paragraph>
              <CodeEditor>
                <pre>
                  <code>
                    {`<!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>

    </body>
</html>`}
                  </code>
                </pre>
              </CodeEditor>
            </FlexLeft>
            <FlexRight>
              <Paragraph>CSS</Paragraph>
              <CodeEditor>
                <pre>
                  <code>
                    {`body{
    color: blue;
}`}
                  </code>
                </pre>
              </CodeEditor>
            </FlexRight>
            {/* <label htmlFor="projectName">
                            Project Title
                            <input
                                type="text"
                                name="projectName"
                                id="projectName"
                                value={settings.projectName}
                                onChange={this.handleSettingsChange}
                            />
                        </label> */}
          </CodeModalRow>
        </Modal>
        <Editor />
        <ControlBar
          handleModal={this.openModal}
          handleCodeModal={this.openCodeModal}
        />
      </BuilderWrapper>
    );
  }
}
