import { useState } from "react"
import { Link } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

interface MobileMenuProps {
  items: {
    title: string
    href: string
  }[]
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <Button asChild variant="outline" className="w-full">
              <Link href="/login" onClick={() => setOpen(false)}>
                Iniciar sesión
              </Link>
            </Button>
            <Button asChild className="w-full">
              <Link href="/registro" onClick={() => setOpen(false)}>
                Prueba gratuita
              </Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
