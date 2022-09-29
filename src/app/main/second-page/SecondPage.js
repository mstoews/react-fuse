import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';
import DemoContent from '@fuse/core/DemoContent';

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
        <div className="p-36">
          <h1>Landing Page Example</h1>
        </div>
      }
      content={
        <div className="p-36">
          <DemoContent />
          <br />
        </div>
      }
    />
  );
}

export default SecondPage;
