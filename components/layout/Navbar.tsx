"use client";

import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[color:var(--color-border)] bg-[color:var(--color-bg)]/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-[color:var(--color-accent)] transition-opacity hover:opacity-80"
          aria-label="Lumynar - inicio"
        >
          <Logo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.slice(0, -1).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[color:var(--color-text-muted)] transition-colors hover:text-[color:var(--color-text)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#contacto">Hablemos</a>
          </Button>
        </div>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Abrir menú"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)]/60 text-[color:var(--color-text)] md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-[color:var(--color-bg)]/80 backdrop-blur-md data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col gap-8 border-l border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8">
              <Dialog.Title className="sr-only">Menú de navegación</Dialog.Title>
              <div className="flex items-center justify-between">
                <Logo />
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Cerrar menú"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-border)]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </div>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Dialog.Close asChild>
                      <a
                        href={link.href}
                        className="block rounded-xl px-4 py-3 text-lg text-[color:var(--color-text)] hover:bg-[color:var(--color-surface-2)]"
                      >
                        {link.label}
                      </a>
                    </Dialog.Close>
                  </li>
                ))}
              </ul>
              <Dialog.Close asChild>
                <Button asChild size="lg" className="mt-auto">
                  <a href="#contacto">Hablemos</a>
                </Button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
