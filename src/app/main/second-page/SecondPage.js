import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { useTranslation } from 'react-i18next';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function SecondPage(props) {

  return (
    <Root
      header={
        <div className="p-24">
          <h1>Second Page</h1>
        </div>
      }
      contentToolbar={
        <div className="px-24">
          <h4>Content Toolbar</h4>
        </div>
      }
      content={
        <div className="p-24">
          <h4>Content</h4>
          <br />
          <DemoContent />
        </div>
      }
    />
  );
}

export default SecondPage;
