"use client"

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, ChangeEventHandler, useEffect } from "react";
import { useDebounce } from "@/hook/use-debounce";
import qs from "query-string";

export const SearchInput = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const title = searchParams.get("title"); // Use "title" instead of "name"

    const [value, setValue] = useState(title || "");
    const debouncedValue = useDebounce<string>(value, 500);

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
         setValue(e.target.value);
    };

    useEffect(() => {
        const query = { 
            title: debouncedValue,
        };

        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true, skipEmptyString: true });

        router.push(url);
    }, [debouncedValue, router]);

    return (
        <div className="relative">
            <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
            <Input
                onChange={onChange}
                value={value}
                placeholder="Search..."
                className="pl-10 bg-primary/10"
            />
        </div>
    );
};