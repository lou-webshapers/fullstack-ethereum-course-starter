import { Button, Link } from "@nextui-org/react";

export default function Page() {
  return (
    <main className="pt-[100px]">
      <h1 className="font-bold text-3xl uppercase mb-2">Chill Apes NFT</h1>
      <p className="text-gray-600 text-xl mb-2">
        The BEST NFT community on EARTH!
      </p>
      <Button
        href="/mint"
        as={Link}
        color="primary"
        showAnchorIcon
        variant="solid"
      >
        Mint Now
      </Button>
    </main>
  );
}
