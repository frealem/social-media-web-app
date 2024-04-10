import { Box } from "@mui/material";
import userImage from '../images/photo_2024-04-08_23-14-40.jpg'
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