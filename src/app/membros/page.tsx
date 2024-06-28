import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import members from "@/lib/members";
import { Button } from "@/components/ui/button";

export default function Membros() {
  return (
    <main>
      <h1 className="text-primary">Membros Atuais</h1>
      <div className="flex justify-right">
        <Link href={"/membros-antigos"}>
          <Button size={"lg"}>Membros Antigos</Button>
        </Link>
      </div>
      <br></br>
      <div className="grid grid-cols-3 gap-4">
        {members
          .filter((member) => member.ativo) 
          .map((member) => (
            <Card key={member.id} className="flex flex-col items-center">
              <CardHeader className="items-center gap-2">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src={`/members-img/${member.img}`}
                    alt={`Imagem de ${member.name}`}
                  />
                  <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-center text-primary">
                  {member.name}
                </CardTitle>
                <div className="text-foreground/70 ">
                  {member.name === "Orlando Coelho" && "In memoriam"}
                </div>
              </CardHeader>
              <CardContent className="text-center">{member.about}</CardContent>
              <CardFooter className="gap-4 text-sm text-foreground/70 transition-colors">
                {member.lattes && (
                  <Link href={member.lattes} className="hover:text-foreground">
                    Lattes
                  </Link>
                )}
                {member.linkedin && (
                  <Link href={member.linkedin} className="hover:text-foreground">
                    LinkedIn
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
      </div>
    </main>
  );
}
