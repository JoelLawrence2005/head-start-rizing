import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Company", "About Us", "Team", "Products", "Blog"];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            className="text-2xl md:text-3xl text-center font-bold "
            color="white"
          >
            Ealry Bird Offer Rs. 1000
          </Typography>
          {/* <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"
          >
            Don&apos;t miss out on this exclusive offer that will end soon.
          </Typography> */}
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <a href="https://forms.gle/6mqGtyAGdVMn117v5" target="_blank" rel="noopener noreferrer">
              <Button color="white" size="md" className="rounded-full">
                buy ticket
              </Button>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h6"
            className="text-gray-900"
          >
            Rizing Summer Interns &apos;26
          </Typography>
          {/* <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul> */}
          <div className="flex w-fit justify-center gap-2">
            <a href="https://www.facebook.com/share/1D9wUSjssr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-facebook text-lg" />
              </IconButton>
            </a>
            <a href="https://www.instagram.com/head._start/?hl=en" target="_blank" rel="noopener noreferrer">
              <IconButton size="sm" color="gray" variant="text">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
            </a>
            {/* <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-github text-lg" />
            </IconButton> */}
          </div>
        </div>
        {/* <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            Material Tailwind
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Creative Tim
          </a>
          .
        </Typography> */}
        {/* <p className="text-center font-normal !text-gray-700">Distributed by{" "} <a className="text-green-700 font-semibold" href="https://themewagon.com" target="_blank">ThemeWagon</a></p> */}
      </div>
    </footer>
  );
}

export default Footer;
