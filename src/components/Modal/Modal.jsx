import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ episodeUrl }) {
  const [open, setOpen] = useState(false);
  const [episode, setEpisode] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch(episodeUrl)
      .then((res) => res.json())
      .then((data) => setEpisode(data));
  }, [episodeUrl]);

  return (
    <div>
      <Button onClick={handleOpen}>{episodeUrl}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {episode?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {episode?.characters?.map((e) => {
              return <p>{e}</p>;
            })}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
