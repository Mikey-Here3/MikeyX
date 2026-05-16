"use client";

import { useState, useRef } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Terminal } from "lucide-react";

interface CodeEditorProps {
  initialCode: string;
  language?: string;
}

export function CodeEditor({ initialCode, language = "javascript" }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "");
  };

  const runCode = () => {
    setIsRunning(true);
    setOutput([]);
    
    // Create a safe-ish environment for basic console logging
    const logs: string[] = [];
    const originalConsoleLog = console.log;
    
    // Override console.log temporarily
    console.log = (...args) => {
      logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
      originalConsoleLog(...args); // Keep standard logging too
    };

    try {
      // Create a new function to execute the code
      // We wrap it in a try-catch to catch runtime errors
      const execute = new Function(code);
      execute();
      
      if (logs.length === 0) {
        logs.push("Code executed successfully (no output).");
      }
      setOutput(logs);
    } catch (err: any) {
      setOutput([`Error: ${err.message}`]);
    } finally {
      // Restore original console.log
      console.log = originalConsoleLog;
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput([]);
  };

  return (
    <div className="flex flex-col h-full border rounded-xl overflow-hidden bg-card shadow-sm">
      {/* Editor Header / Controls */}
      <div className="flex items-center justify-between p-3 border-b bg-muted/50">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold tracking-tight">Interactive Workspace</span>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetCode}
            className="h-8 gap-1.5 text-xs"
          >
            <RotateCcw className="w-3 h-3" />
            Reset
          </Button>
          <Button 
            size="sm" 
            onClick={runCode} 
            disabled={isRunning}
            className="h-8 gap-1.5 text-xs bg-primary text-primary-foreground shadow-md hover:bg-primary/90"
          >
            <Play className="w-3 h-3 fill-current" />
            Run Code
          </Button>
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="flex-1 min-h-[300px]">
        <Editor
          height="100%"
          defaultLanguage={language}
          theme="vs-dark"
          value={code}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            padding: { top: 16, bottom: 16 },
            scrollBeyondLastLine: false,
            smoothScrolling: true,
            cursorBlinking: "smooth",
            fontFamily: "var(--font-sans), monospace",
          }}
        />
      </div>

      {/* Output Terminal */}
      <div className="h-[150px] border-t bg-[#1e1e1e] flex flex-col">
        <div className="px-4 py-2 border-b border-gray-800 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Console Output</span>
        </div>
        <div className="flex-1 p-4 overflow-y-auto font-mono text-sm text-gray-300">
          {output.length === 0 ? (
            <span className="text-gray-600 italic">Run your code to see output here...</span>
          ) : (
            output.map((line, i) => (
              <div 
                key={i} 
                className={`mb-1 ${line.startsWith("Error:") ? "text-red-400" : "text-green-400"}`}
              >
                {line}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
