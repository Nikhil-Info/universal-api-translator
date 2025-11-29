"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Copy, Download, FileCode, Zap, CheckCircle2 } from "lucide-react"
import { useState } from "react"

const exampleAPIs = {
    openapi: `{
  "openapi": "3.0.0",
  "info": {
    "title": "User API",
    "version": "1.0.0"
  },
  "paths": {
    "/users": {
      "get": {
        "summary": "Get all users",
        "responses": {
          "200": {
            "description": "Success"
          }
        }
      }
    }
  }
}`,
    graphql: `type User {
  id: ID!
  name: String!
  email: String!
  createdAt: DateTime!
}

type Query {
  users: [User!]!
  user(id: ID!): User
}

type Mutation {
  createUser(name: String!, email: String!): User!
  updateUser(id: ID!, name: String, email: String): User!
  deleteUser(id: ID!): Boolean!
}`,
    grpc: `syntax = "proto3";

package user;

service UserService {
  rpc GetUsers (Empty) returns (UserList);
  rpc GetUser (UserId) returns (User);
  rpc CreateUser (CreateUserRequest) returns (User);
}

message User {
  string id = 1;
  string name = 2;
  string email = 3;
  int64 created_at = 4;
}

message UserList {
  repeated User users = 1;
}`,
}

export default function PlaygroundPage() {
    const [sourceFormat, setSourceFormat] = useState<"openapi" | "graphql" | "grpc">("openapi")
    const [targetFormat, setTargetFormat] = useState<"graphql" | "grpc" | "openapi">("graphql")
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-muted/50 to-background">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            className="flex flex-col items-center space-y-4 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    API Translation Playground
                                </h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                    Try converting your API specifications between different formats with AI-powered intelligence.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Interactive Playground */}
                <section className="w-full py-12 md:py-16">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            className="grid gap-6 lg:grid-cols-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            {/* Source API */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="flex items-center gap-2">
                                            <Code2 className="h-5 w-5 text-primary" />
                                            Source API
                                        </CardTitle>
                                        <select
                                            value={sourceFormat}
                                            onChange={(e) => setSourceFormat(e.target.value as "openapi" | "graphql" | "grpc")}
                                            className="px-3 py-1 rounded-md border border-border bg-background text-sm"
                                        >
                                            <option value="openapi">OpenAPI</option>
                                            <option value="graphql">GraphQL</option>
                                            <option value="grpc">gRPC</option>
                                        </select>
                                    </div>
                                    <CardDescription>
                                        Paste your API specification or use the example
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="relative">
                                        <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm font-mono h-[400px] overflow-y-auto">
                                            <code>{exampleAPIs[sourceFormat]}</code>
                                        </pre>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="absolute top-2 right-2"
                                            onClick={handleCopy}
                                        >
                                            {copied ? (
                                                <>
                                                    <CheckCircle2 className="h-4 w-4 mr-1" />
                                                    Copied
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="h-4 w-4 mr-1" />
                                                    Copy
                                                </>
                                            )}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Converted API */}
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="flex items-center gap-2">
                                            <Zap className="h-5 w-5 text-primary" />
                                            Converted API
                                        </CardTitle>
                                        <select
                                            value={targetFormat}
                                            onChange={(e) => setTargetFormat(e.target.value as "graphql" | "grpc" | "openapi")}
                                            className="px-3 py-1 rounded-md border border-border bg-background text-sm"
                                        >
                                            <option value="graphql">GraphQL</option>
                                            <option value="grpc">gRPC</option>
                                            <option value="openapi">OpenAPI</option>
                                        </select>
                                    </div>
                                    <CardDescription>
                                        AI-powered conversion result
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="relative">
                                        <pre className="p-4 rounded-lg bg-muted overflow-x-auto text-sm font-mono h-[400px] overflow-y-auto">
                                            <code>{exampleAPIs[targetFormat]}</code>
                                        </pre>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="absolute top-2 right-2"
                                        >
                                            <Download className="h-4 w-4 mr-1" />
                                            Download
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Convert Button */}
                        <motion.div
                            className="flex justify-center mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <Button size="lg" className="rounded-xl">
                                <Zap className="h-5 w-5 mr-2" />
                                Convert API
                                <ArrowRight className="h-5 w-5 ml-2" />
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="w-full py-12 md:py-16 bg-muted/30">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            className="grid gap-6 md:grid-cols-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Card className="relative overflow-hidden">
                                <CardHeader>
                                    <Code2 className="h-10 w-10 mb-2 text-primary" />
                                    <CardTitle>OpenAPI Support</CardTitle>
                                    <CardDescription>
                                        Full support for OpenAPI 3.0 and 3.1 specifications
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Convert to and from OpenAPI with complete schema validation and documentation generation.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="relative overflow-hidden">
                                <CardHeader>
                                    <FileCode className="h-10 w-10 mb-2 text-primary" />
                                    <CardTitle>GraphQL Schemas</CardTitle>
                                    <CardDescription>
                                        Transform REST APIs to GraphQL schemas automatically
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Generate type-safe GraphQL schemas with resolvers from your API definitions.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="relative overflow-hidden">
                                <CardHeader>
                                    <Zap className="h-10 w-10 mb-2 text-primary" />
                                    <CardTitle>gRPC Protocol Buffers</CardTitle>
                                    <CardDescription>
                                        Convert to high-performance gRPC services
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">
                                        Generate Protocol Buffer definitions and service implementations automatically.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-12 md:py-16">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            className="flex flex-col items-center space-y-4 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                                Ready to streamline your API workflow?
                            </h2>
                            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-lg">
                                Get started with our CLI tool or integrate directly into your development pipeline.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <Button size="lg" className="rounded-xl">
                                    Get Started Free
                                </Button>
                                <Button size="lg" variant="outline" className="rounded-xl">
                                    View Documentation
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    )
}
