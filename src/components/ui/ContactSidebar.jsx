"use client"

import * as React from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { MdEmail } from "react-icons/md";
import { FaPhone, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpenFind, setIsOpenFind] = React.useState(false)

  return (
    <div className="flex flex-col gap-4">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[250px] space-y-2"
      >
        <CollapsibleTrigger asChild>
          <div className="flex items-center justify-between space-x-4 px-4 cursor-pointer">
            <h4 className="text-sm font-semibold text-slate-300">
              _contact
            </h4>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="px-4 py-1 flex flex-col gap-2 font-mono text-sm">
            <div className="flex gap-2 items-center text-slate-400">
              <div>
                <MdEmail />
              </div>
              <div>
                kesavyadav992@gmail.com
              </div>
            </div>
            <div className="flex gap-2 items-center text-slate-400">
              <div>
                <FaPhone />
              </div>
              <div>
                +91 7508794201
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={isOpenFind}
        onOpenChange={setIsOpenFind}
        className="w-[250px] space-y-2"
      >
        <CollapsibleTrigger asChild>
          <div className="flex items-center justify-between space-x-4 px-4 cursor-pointer">
            <h4 className="text-sm font-semibold text-slate-300">
              _find-me-also-in
            </h4>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2">
          <div className="px-4 py-1 flex flex-col gap-2 font-mono text-sm">
            <Link to={'https://instagram.com/k_shav09'} target="_blank" className="flex gap-2 items-center text-slate-400">
              <div>
                <FaInstagram />
              </div>
              <div>
                _instagram
              </div>
            </Link>
            <Link to={'https://www.linkedin.com/in/keshavyadav5/'} target="_blank" className="flex gap-2 items-center text-slate-400">
              <div>
                <FaLinkedin />
              </div>
              <div>
                _linkedin
              </div>
            </Link>
            <Link to={'https://www.github.com/keshavyadav5'} target="_blank" className="flex gap-2 items-center text-slate-400">
              <div>
                <FaGithub />
              </div>
              <div>
                _github
              </div>
            </Link>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default ContactSidebar
