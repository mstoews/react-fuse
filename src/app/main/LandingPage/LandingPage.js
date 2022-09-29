import DemoContent from '@fuse/core/DemoContent';
import { styled } from '@mui/material/styles';
import FusePageSimple from '@fuse/core/FusePageSimple';

const Root = styled(FusePageSimple)({
  '& .FusePageSimple-header': {},
  '& .FusePageSimple-toolbar': {},
  '& .FusePageSimple-content': {},
  '& .FusePageSimple-sidebarHeader': {},
  '& .FusePageSimple-sidebarContent': {},
});

function LandingPage(props) {
  
  return (
    <Root
      header={
        <div className="p-36">
          <h1>Main Landing Page</h1>
        </div>
      }
      content={
        <div className="p-36">
          <DemoContent />
        </div>
      }
    />
  );
}

export default LandingPage;
