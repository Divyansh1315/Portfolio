import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Home, FolderOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center text-center gap-6 max-w-lg mx-auto">
          <p className="text-7xl font-bold text-primary" aria-hidden="true">
            404
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Looks like this page took a different route.
          </h1>
          <p className="text-muted-foreground">
            The page you&rsquo;re looking for doesn&rsquo;t exist or may have
            been moved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Button
              href="/"
              variant="primary"
              icon={<Home className="h-4 w-4" />}
            >
              Return Home
            </Button>
            <Button
              href="/projects"
              variant="secondary"
              icon={<FolderOpen className="h-4 w-4" />}
            >
              Explore Projects
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
