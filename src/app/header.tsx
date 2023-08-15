"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineCar,
  AiOutlineMobile,
  AiFillApple,
} from "react-icons/ai";
import { BiHome, BiGame } from "react-icons/bi";
import { BsXbox } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { GiNestedHexagons } from "react-icons/gi";
import { MdOutlineAir } from "react-icons/md";
import SignedIn from "./signedIn";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
interface Props {
  session: Session | null;
}

interface HeaderProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
  session: Session | null;
}

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import {
  createStyles,
  Header as MantineHeader,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: /*AiOutlineMobile*/ AiFillApple,
    title: "موبایل",
  },
  {
    icon: /*BiGame*/ BsXbox,
    title: "کنسول بازی",
  },
  {
    icon: /*BiHome*/ MdOutlineAir,
    title: "خانه",
  },
  {
    icon: AiOutlineCar,
    title: "ماشین",
  },
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <Link href={`/products?category=${item.title}`}>
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
    </Link>
  ));

  return (
    <Box pb={120}>
      <MantineHeader height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Link href="/">
            <div className="flex">
              <GiNestedHexagons size={30} />
              <span>کجا قسط</span>
            </div>
          </Link>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link href="/" className={classes.link}>
              خانه
            </Link>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      دسته بندی ها
                    </Box>
                    <FiChevronDown
                      size={16}
                      color={theme.fn.primaryColor()}
                      className="mt-1"
                    />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position="apart" px="md">
                  <Text fw={500}>دسته بندی ها</Text>
                  <Anchor fz="xs">
                    <Link href="categories">نمایش همه</Link>
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />
                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link href="providers" className={classes.link}>
              ارائه دهندگان
            </Link>
            <Link href="/learning" className={classes.link}>
              آموزش
            </Link>
            <Link href="/aboutus" className={classes.link}>
              درباره ما
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Link href="/signin">
              <Button>ورود</Button>
            </Link>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </MantineHeader>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <a href="#" className={classes.link}>
            خانه
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                دسته بندی ها
              </Box>
              <FiChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            آموزش
          </a>
          <a href="#" className={classes.link}>
            ارائه دهندگان
          </a>
          <a href="#" className={classes.link}>
            درباره ما
          </a>

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

// const Header: FC<Props> = ({ session }) => {
//   const [openMenu, setOpenMenu] = useState(false);
//   const pathname = usePathname().replace("/", "");
//   return (
//     <header className="w-full h-20 z-50">
//       <nav className="lg:w-3/5 lg:mx-auto mx-5 flex justify-between items-center h-full">
//         <Link href="/">
//           <Button className="flex-1 text-lg font-bold">کجا قسط</Button>
//         </Link>
//         <ul
//           className={`flex-1 flex flex-col md:right-0 md:flex-row md:bg-inherit bg-cyan-900 transition-all justify-around items-center w-1/2 h-screen md:w-auto md:h-auto fixed top-0 md:relative ${
//             openMenu ? "right-0 w-screen" : "-right-full"
//           }`}
//         >
//           <li
//             className={`p-1 rounded-lg transition-all cursor-pointer ${
//               pathname.includes("categories")
//                 ? "hover:bg-secondary hover:text-primary  border border-black bg-primary"
//                 : "hover:bg-white/20"
//             } `}
//           >
//             <Link href="/categories"> دسته بندی کالاها</Link>
//           </li>
//           <li
//             className={`p-1 rounded-lg transition-all cursor-pointer ${
//               pathname.includes("providers")
//                 ? "hover:bg-secondary hover:text-primary  border border-black bg-primary"
//                 : "hover:bg-white/20"
//             } `}
//           >
//             <Link href="/providers">وام دهندگان</Link>
//           </li>
//           <li
//             className={`p-1 rounded-lg transition-all cursor-pointer ${
//               pathname.includes("learning")
//                 ? "hover:bg-secondary hover:text-primary  border border-black bg-primary"
//                 : "hover:bg-white/20"
//             } `}
//           >
//             <Link href="/learning">آموزش</Link>
//           </li>
//           <li
//             className={`p-1 rounded-lg transition-all cursor-pointer ${
//               pathname.includes("aboutus")
//                 ? "hover:bg-secondary hover:text-primary  border border-black bg-primary"
//                 : "hover:bg-white/20"
//             } `}
//           >
//             <Link href="/aboutus">درباره ما</Link>
//           </li>
//           <li>
//             {session?.user ? (
//               <SignedIn session={session} />
//             ) : (
//               <button
//                 onClick={() => signIn()}
//                 className={`p-1 rounded-lg transition-all cursor-pointer ${
//                   pathname.includes("auth")
//                     ? "hover:bg-secondary hover:text-primary  border border-black bg-primary"
//                     : "hover:bg-white/20"
//                 } `}
//               >
//                 وارد شوید
//               </button>
//             )}
//           </li>
//         </ul>
//         <button
//           onClick={() => setOpenMenu(!openMenu)}
//           className="md:hidden z-50"
//         >
//           <AiOutlineMenu
//             className={`${openMenu ? "text-white" : "text-white"}`}
//           />
//         </button>
//       </nav>
//       <div
//         className=""
//         style={{
//           height: "1px",
//           background: "linear-gradient(to right,#F2E9E4, #46494C,#F2E9E4)",
//         }}
//       />
//     </header>
//   );
// };

export default Header;
