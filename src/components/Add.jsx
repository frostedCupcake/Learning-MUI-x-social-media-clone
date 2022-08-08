import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Add as AddIcon,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
  DateRange,
} from "@mui/icons-material";
import { Box } from "@mui/system";

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: ".8rem",
    alignItems: "center",
    marginBottom: "2rem",
    marginTop: "1rem",
  }));
  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 20 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={450}
          height={320}
          p={3}
          borderRadius={2}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography varient="h6" color="grey" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              sx={{
                width: "2.2rem",
                height: "2.2rem",
              }}
              src="https://play-lh.googleusercontent.com/7Ac5TgaL15Ra4bvFVHJKCdJp4qvnL4djZj5bKc6RN-MZjzrvkeHbJytek0NPTSdZcp8"
            />
            <Typography varient="span">John doe</Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
            sx={{
              width: "100%",
            }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="succes" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button
              sx={{
                width: "100px",
              }}
            >
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
};

export default Add;
