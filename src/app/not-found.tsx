import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center text-center gap-6">
          <p className="text-6xl font-bold text-primary">404</p>
          <h1 className="text-2xl font-semibold text-foreground">
            Looks like this page took a different route.
          </h1>
          <p className="text-muted-foreground max-w-md">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have been
            moved.
          </p>
          <Button href="/" variant="primary" icon={<Home className="h-4 w-4" />}>
            Return Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
