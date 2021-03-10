import Box from "../Box";
import { TwitterLogoIcon, GitHubLogoIcon } from "@modulz/radix-icons";
import ThemeToggle from "../ThemeToggle";

const Footer = ({ ...props }) => {
  return (
    <Box
      css={{
        borderTop: "1px solid",
        borderColor: "$border",
        py: "$4",
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        margin: "0 auto",
        fontSize: "$1",
      }}
      {...props}
    >
      <Box css={{ textAlign: "left", display: "flex", alignItems: "center" }}>
        <Box css={{ display: "flex", alignItems: "center", mr: "$3" }}>
          <TwitterLogoIcon />
          <Box css={{ ml: "$2" }}>Twitter</Box>
        </Box>
        <Box css={{ display: "flex", alignItems: "center", mr: "$3" }}>
          <GitHubLogoIcon />
          <Box css={{ ml: "$2" }}>Github</Box>
        </Box>
        <Box css={{ display: "flex", alignItems: "center" }}>
          <TwitterLogoIcon />
          <Box css={{ ml: "$2" }}>Discord</Box>
        </Box>
      </Box>
      <Box css={{ textAlign: "center" }}>
        The Web3 Index™. All rights reserved
      </Box>
      <Box
        css={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ThemeToggle />
      </Box>
    </Box>
  );
};

export default Footer;