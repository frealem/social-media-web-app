import { Box } from "@mui/material";
import userImage from '../../src/assets/images/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg'
const UserImage = ({ image, size = {size},profilePicture }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={profilePicture || userImage}
      />
    </Box>
  );
};

export default UserImage;